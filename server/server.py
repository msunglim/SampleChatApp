import os
from flask import Flask,request
from flask_cors import CORS

import json


app = Flask(__name__)
CORS(app)

@app.before_request
def load_data():
    # JSON 파일 경로
    # userPath = './../CloneChatApp/data/userData.json'
    # chatroomPath = './../CloneChatApp/data/chatroomData.json'
    # chatPath = './../CloneChatApp/data/chatData.json'
    
    # # JSON 파일을 읽어와 userData 변수에 저장
    # with open(userPath, 'r') as file:
    #     # app.userData = json.load(file)
    app.userData = [
        {
            "pk":0,
            "id":"a",
            "pw":"a",
            "name":"Buzz",
            "profile":"https://www.pngitem.com/pimgs/m/184-1846102_buzz-georgia-tech-black-and-white-clipart-png.png",
            "friends": [1,2,3,4,5,6,7,8,9,10],
            "chatroom":[0,1,2,3]
        },
        {
            "pk":1,
            "id":"b",
            "pw":"b",
            "name":"Nyaong",
            "profile":"https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?size=626&ext=jpg",
            "friends": [0],
            "chatroom":[0,1,2,3]
        }
        ,
        {
            "pk":2,
            "id":"c",
            "pw":"c",
            "name":"Nyaaaaaaong",
            "profile":"https://img.freepik.com/free-vector/cute-cat-with-love-sign-hand-cartoon-illustration-animal-nature-concept-isolated-flat-cartoon-style_138676-3419.jpg?size=626&ext=jpg",
            "friends": [0],
            "chatroom":[1,2,3]
        }
        ,
        {
            "pk":3,
            "id":"d",
            "pw":"d",
            "name":"ddd",
            "profile":"https://img.freepik.com/free-photo/front-view-sad-girl-being-bullied_23-2149748403.jpg?w=1060&t=st=1694311819~exp=1694312419~hmac=2707cf251a791a264721449328889405843ea85c302354cc7d0173902543f95b",
            "friends": [0],
            "chatroom":[2,3]
        }
        ,
        {
            "pk":4,
            "id":"e",
            "pw":"e",
            "name":"eeeemascot",
            "profile":"https://img.freepik.com/free-photo/closeup-portrait-stylish-cute-young-woman-with-long-brunette-hair-smiling-camera-hairdresser-salon_197531-3686.jpg?t=st=1694311819~exp=1694312419~hmac=24e623005cf4f6548a721ea907768f7a7313685db98de492cacf5f52f09ddcca",
            "friends": [0],
            "chatroom":[3]
        }
        ,
        {
            "pk":5,
            "id":"f",
            "pw":"f",
            "name":"fff",
            "profile":"https://img.freepik.com/premium-photo/handsome-businessman-wearing-protective-mask-gloves-holding-virus-blood-test-positive_600776-288.jpg",
            "friends": [0],
            "chatroom":[]
        }
        ,
        {
            "pk":6,
            "id":"g",
            "pw":"g",
            "name":"ggggggggg",
            "profile":"https://img.freepik.com/premium-photo/historic-colored-houses-center-bruges-belgium_1429-10406.jpg",
            "friends": [0],
            "chatroom":[]
        }
        
        ,
        {
            "pk":7,
            "id":"h",
            "pw":"h",
            "name":"home",
            "profile":"https://img.freepik.com/premium-photo/attractive-healthy-young-woman-doing-exercises-while-resting-home_1429-9303.jpg",
            "friends": [0],
            "chatroom":[]
        }
        
        ,
        {
            "pk":8,
            "id":"x",
            "pw":"x",
            "name":"xyz",
            "profile":"https://img.freepik.com/free-photo/blue-cushions-one-yellow-cushion_1203-321.jpg",
            "friends": [0],
            "chatroom":[]
        }
        
        ,
        {
            "pk":9,
            "id":"y",
            "pw":"y",
            "name":"yfi",
            "profile":"https://img.freepik.com/free-photo/sunglasses_1203-7886.jpg",
            "friends": [0],
            "chatroom":[]
        }
        
        ,
        {
            "pk":10,
            "id":"z",
            "pw":"z",
            "name":"zzzzzzzz",
            "profile":"https://img.freepik.com/free-photo/beautiful-clothes-shopping-store_1203-2232.jpg?t=st=1694312040~exp=1694312640~hmac=04dd21f5d63d268194e92fd9e9c9850f4db07fc2d063123c3ba77688d8e608b1",
            "friends": [0],
            "chatroom":[]
        }
        
    ]
    # with open(chatroomPath, 'r') as file:
    app.chatroomData = [
        {
            "pk":0,
            "participants":[0,1],
            "chatLog":[0,2,4,6,9]
        },
        {
            "pk":1,
            "participants":[0,1,2],
            "chatLog":[1,3,5,7,8]
        },
        {
            "pk":2,
            "participants":[0,1,2,3],
            "chatLog":[10,11,12]
        },
        {
            "pk":3,
            "participants":[0,1,2,3,4],
            "chatLog":[13]
        }
    ]

        # app.chatroomData = json.load(file)
    # with open(chatPath, 'r') as file:
        # app.chatData = json.load(file)
    app.chatData = [
    {
        "pk":0,
        "writer":0,
        "date":"2023-09-02T12:23:42",
        "content":"Hi my name is Monsun",
        "image":"",
        "emoji":""
    },
    {
        "pk":1,
        "writer":2,
        "date":"2023-09-02T12:23:43",
        "content":"Nayonng",
        "image":"",
        "emoji":""
    },
    {
        "pk":2,
        "writer":1,
        "date":"2023-09-02T12:23:44",
        "content":"Naaaaaaaaaaayonng",
        "image":"",
        "emoji":""
    }
    ,
    {
        "pk":3,
        "writer":2,
        "date":"2023-09-02T12:23:45",
        "content":"Purchase Galaxy Phone",
        "image":"",
        "emoji":""
    }
    ,
    {
        "pk":4,
        "writer":1,
        "date":"2023-09-02T12:23:46",
        "content":"Time is running out",
        "image":"",
        "emoji":""
    }
    ,
    {
        "pk":5,
        "writer":1,
        "date":"2023-09-02T12:23:47",
        "content":"My Saturday is gone.",
        "image":"",
        "emoji":""
    }
    ,
    {
        "pk":6,
        "writer":0,
        "date":"2023-09-02T12:23:48",
        "content":"I wanna ",
        "image":"",
        "emoji":""
    },
    {
        "pk":7,
        "writer":0,
        "date":"2023-09-02T12:24:48",
        "content":"sleep",
        "image":"",
        "emoji":""
    },
    {
        "pk":8,
        "writer":1,
        "date":"2023-09-02T12:34:48",
        "content":"No you",
        "image":"",
        "emoji":""
    },
    {
        "pk":9,
        "writer":1,
        "date":"2023-09-08T12:34:48",
        "content":"cant",
        "image":"",
        "emoji":""
    },
    {
        "pk":10,
        "writer":3,
        "date":"2023-09-08T13:34:48",
        "content":"AAAAAAAAA",
        "image":"",
        "emoji":""
    }
    ,
    {
        "pk":11,
        "writer":1,
        "date":"2023-09-08T13:35:48",
        "content":"Dobiduba",
        "image":"",
        "emoji":""
    } ,
    {
        "pk":12,
        "writer":1,
        "date":"2023-09-10T01:12:58",
        "content":"hahahahaah",
        "image":"",
        "emoji":""
    },
    {
        "pk":13,
        "writer":4,
        "date":"2023-09-10T01:13:18",
        "content":"I am dead",
        "image":"",
        "emoji":""
    }
]

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
