import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useInfoStore = defineStore('Info', {
  state: () => ({
    activitys: [
      {
        id: uuidv4(),
        subtitle: '2023/12/26',
        title: '參與台北寵物論壇，爭取貓咪友善環境',
        description: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
        picture: 'image3',
      },
      {
        id: uuidv4(),
        subtitle: '2023/12/24',
        title: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
        description: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！',
        picture: 'image4',
      },
      {
        id: uuidv4(),
        subtitle: '2023/12/20',
        title: '收容所模特兒大比拼！',
        description: '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
        picture: 'image5',
      }
    ],
    topic: [
      {
        id: uuidv4(),
        subtitle: '喵的保障',
        title: '為毛孩子謀福利！推動寵物醫療保障方案',
        description: '每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用。每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力。目前已有和超過 200 家動物醫院進行初步的合作討論。',
        picture: 'image6',
      },
      {
        id: uuidv4(),
        subtitle: '喵的福利',
        title: '打造休閒天堂！推廣寵物休閒與娛樂場所',
        description: '',
        picture: 'image7',
      },
      {
        id: uuidv4(),
        subtitle: '喵的教育',
        title: '推廣寵物飼養教育，讓愛更加專業',
        description: '',
        picture: 'image8',
      }
    ]
  })
})