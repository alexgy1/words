
/**
 * n : the name of the word
 * e : the example of the word srting when only one example or will be array 
 */
let words =[
    {
        n:'ruler',
        e:'The country was without a ruler after the kindg died.'
    },
    {
        n:'black',
        e:'After her husband died, she dressed in black for the rest of her life.'
    },
    {
        n:'pear',
        e:'I perfer apple to pears.'
    },
    {
        n:'ear',
        e:"Dont't shot to my ears like that. I can hear you perfectly well"
    },
    {
        n:'this',
        e:'How long have you been living in this country?'
    },
    {
        n:'it',
        e:'did you see it?'
    },
    {
        n:'what',
        e:'what is your name?'
    },
    {
        n:'no',
        e:'Hand in the paper no later than TuesDay'
    },
    {
        n:'yellow',
        e:'Leaves turn yellow in the fall',
    },
    {   
        n:'three',
        e:'The old woman has three grandchildren'
    },
    {
        n:'face',
        e:[
            "'He buried his face in his hands.'",
            "Please call the police when you face danger."
        ]
    },
    {
        n:'there',
        e:[
            "There's a restaurant around the corner.",
            "There!Did you see the birds?"
        ]
    },
    {
        n:'cat',
        e:"The cat is playing with a live mouse."
    },
    {
        n:'eight',
        e:[
            "This store shuts at eight o'clock on  every Wednesday evening."
        ]
    },
    {
        n:'one',
        e:"Do you want one or two or three or four five six seven eight nine ten  eleven  twelve thirteen fourteen  ?"
    },
    {
        n:'is',
        e:'The machine is difficult to use.'
    },
    {
        n:'monkey',
        e:'He jumps up and dwon like a monkey.'
    },{
        n:"green",
        e:[
            "The grass is greee",
            "He is dressed in green today."
        ]
    },
    {
        n:"have",
        e:"He had a new car and boat."
    },
    {
        n:"pencil",
        e:"He drew the picture with a pencil."
    },
    {
        n:"dog",
        e:"I took the dog for a walk."

    },
    {
        n:"how",
        e:"How does it work?"
    },
    {
        n:'many',
        e:[
            "We don't have very many copies left.",
            "You can't have one each. We haven't got many"
        ]
    },
    {
        n:'tiger',
        e:'Lions and tigers belong to the cat family.'
    },
    {
        n:'teacher',
        e:"I asked the teacher for her advice."
    },
    {
        n:'blue',
        e:[
            'The color of the sky is bule.',
            'He wore a blue shirt today.'
        ]
    },
    {
        n:'red',
        e:[
            'The sky slowly changed from blue to red.',
            'He gave his wife a red rose.'
        ]
    },
    {
        n:'i',
        e:"I am a girl."
    },
    {
        n:'apple',
        e:"The apple tastes good."
    },
    {
        n:'a',
        e:'I heared a chlid giggling.'
    },
    {
        n:'orange',
        e:[
            'That orange dress is ugly.',
            'Do you want an apple  or an orange?'
        ]
    },
    {
        n:'seven',
        e:"The bookstore is open seven days a week."
    },
    {
        n:'banana',
        e:'I bought a bunch of bananas in the supermarket.'
    },
    {
        n:"nose",
        e:"My dog has a very good nose."
    },
    {
        n:"eye",
        e:"The suspect has dark hair and green eyes."
    },
    {
        n:'six',
        e:'My nephew is six years now.'
    },
    {
        n:'two',
        e:'I spent two years in Switzerland.'
    },
    {
        n:'colour',
        e: [
            "What's your favourite colour",
            "I have coloured my hair red."
        ]  
    },
    {
        n:'four',
        e:'The meeting should finish around four o\'clock '
    },
    {
        n:'five',
        e:'The basketball players runs five miles every day.'
    },
    {
        n:'mouth',
        e:'She opened her mouth to say something.'
    },
    {
        n:'my',
        e:'My feet are cold.'
    },
    {
        n:'nine',
        e:'The children often go to bed at nine o\'clock '
    },
    {
        n:'are',
        e:'They are my friends.'
    },
    {
        n:"bird",
        e:'He found a bird\'s nest with two eggs in it'
    },
    {
        n:"yes",
        e:"Yes, I don't see why not."
    },
    {
        n:'ten',
        e:'They can take ten people in the minibus.'
    },
    {
        n:'like',
        e:[
            'I like the look of your new assistant.',
            "He's very like his fater."
        ]
    },
    {
        n:'book',
        e:[
            "He cleared a pile of books from the floor.",
            "You'll have to book early if you want to see that fashion show."
        ]
    },
    {
      n:'do',
      e:[
          "Do you like this cat?",
          "I don't know what to do."
      ]  
    }

]

//天下无难事，唯坚持二字，为成功之要诀 坚持学习了181分钟

const addId = (words)=>{
    let startId = 0
    return words.map( w => {
        !w.id && (w.id = startId++)
        return w 
    })
}

const listNamesOfWords = (words)=>{
    return words.map(w=> w.n)//output all words in array 
                .sort((a,b)=> a.localeCompare(b)) //startswith a b c sort 
}

//add increaseId for each word
console.log(addId(words))

//log all words name 
console.log(listNamesOfWords(words))

let len = words.length
console.log( '今天背了' +len + '个单词，继续加油！')

