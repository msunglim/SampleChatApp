from flask import Flask,request
import json

app = Flask(__name__)

@app.before_request
def load_data():
    # JSON 파일 경로
    userPath = './../CloneChatApp/data/userData.json'
    chatroomPath = './../CloneChatApp/data/chatroomData.json'
    chatPath = './../CloneChatApp/data/chatData.json'
    
    # JSON 파일을 읽어와 userData 변수에 저장
    with open(userPath, 'r') as file:
        app.userData = json.load(file)
    with open(chatroomPath, 'r') as file:
        app.chatroomData = json.load(file)
    with open(chatPath, 'r') as file:
        app.chatData = json.load(file)


@app.route("/login", methods=['GET'])
def login():
    id = request.args.get('id')
    pw = request.args.get('pw')
    print("id,",id,"pw",pw)
    # print(app.userData)
    notFoundUser = True
    for i in range(len(app.userData)):
        user = app.userData[i]
        if user['id']==id:
            if user['pw'] == pw:
                return {"result":True, "userPK": i }
            
    if notFoundUser:
        print("Login Failed.\nTry a for id and pw. Ex) id: a, pw:a.\nLook up the userData.json at data for all user info.")
        return {"result":False}
    
    # print(user)

@app.route('/addChat', methods=['POST'])
def addChat():
    try:
        new_chat = request.get_json()
        # new_chat = request_data.get('new_chat')
        chatroomPK = request.args.get('chatroomPK')
        if new_chat is not None:
            app.chatData.append(new_chat)
            # print("chat dat upated",app.chatData)
            app.chatroomData[int(chatroomPK)]['chatLog'].append(len(app.chatData))
            return {"result":True}
        else:
            return {"result":False}
    except Exception as e:
        return {"result":False}
       
@app.route("/userData")
def userData():
    return app.userData

@app.route("/chatroomData")
def chatroomData():
    return app.chatroomData

@app.route("/chatData")
def chatData():
    return app.chatData

@app.route("/chat_user_chatroomData")
def chat_user_chatroomData():
    # print("chat data praen", app.chatData)
    return [app.chatData, app.userData, app.chatroomData]

if __name__ == "__main__":
    app.run(debug=True)
