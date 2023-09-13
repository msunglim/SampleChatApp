export interface Chat {
  pk: number;
  writer: number;
  date: string;
  content: string;
  image: string;
  emoji: string;
}
export interface Chatroom {
  pk: number;
  participants: number[];
  chatLog: number[];
}
export interface User {
  pk: number;
  id: string;
  pw: string;
  name: string;
  profile: string;
  friends: number[];
  chatroom: number[];
}
