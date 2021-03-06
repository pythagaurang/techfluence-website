const initState = {
    events: [
            {
                id: '1', 
                title: 'UXplorer', 
                collab: 'IEEE GEC',
                shortdesc:'A session on UI/UX and a competition.',
                day:'3rd and 4th October',
                time:['10:00 AM - 5:00 PM ',
                      ],
                venue:'Mining Auditorium',
                team:'Individual',
                coordinator:['Valen - 7709563848'],
                faculty:[   'Dr. Nilesh B. Faldesai',
                            'Megha Nayak'],
                rules:['Partcipaton will be solely based on first come first serve basis on the day of spot-on registraton .',
                        '1st  80 partcipants will be selected',
                        'Partcipant needs to get his/her own laptop',
                        'Each participant will have to design an UI/UX within the time alloted',
                        'The best UI among all will win'],
                prize:['Rs. 2500','Rs. 1500']
            },
           {
                id: '2', 
                title: 'Invasion',
                collab:'Event Basket',
                shortdesc:'Present your project ideas.',
                day:'3rd October',
                time:['2:00 PM - 4:00 PM'],
                venue:'Tech Zone Lab (IT dept)',
                team: 'Max. 3 participants',
                coordinator:['Sahil Lotliker - 9011681595'],
                faculty:['Ganesh Manerkar',
                        'Mario Pinto'],
                rules:['There will be two rounds: 1. Preliminary Round 2.  Final Round',
                'Multiple entries allowed.',
                'For the Preliminary round, the partcipants must mail their project ideas on the given email thaddress  three days prior to the event i.e. 30  September 2019 before (gecintensa@gmail.com) 5:00pm. It must be mailed with Google drive link of the project.',
                'Selected partcipants will have to present their project idea at the venue with a ppt and a poster. The presentaton must not exceed 15 mins. The poster must be of the size 22inches x 28 inches.',
                'Selected partcipants name will be put on our official instagram handle on 1st October',
                'These partcipants must register at the venue before 11:00 am on 3 October 2019. The winners will be chosen based on Clarity, Usability, Stability, Scalability and Presentaton skills.',
                'In case of any discrepancy, decision made by coordinators and judges will be final' 
                ],
                prize:['Rs. 5000','Rs. 3000','Rs. 2000']
                       
            },        
            {
            id: '3', 
            title: 'Code It',
            shortdesc:'A coding competition.',
            collab:'GEC Coders Club',
            day:'4th October',
            time:['11:00 AM onwards.'],
            venue:'Tech Zone Lab (IT dept)',
            team: 'Max. 2 participants',
            coordinator:['Vasu Naik - 8805376909','Varun Naik - 8308301520'],
            faculty:['Amogh Sanzgiri','Nadine Dias'],
            rules:['The decision of the organizer is final.',
            'Any modificatons to the rules will be announced before the start of the competion.',
            'Students can participate as individuals or in pairs.',
            'The contestants are expected to have knowledge of C/C++.',
            'The competition will consist of 3 rounds.',
            'Round 1 - MCQ round','This round will compromise of 15 questions. Each correct answers will fetch 3 points and wrong answers will lead to -1 point. The top 8 teams will qualify for round 2.',
            'Round 2 - Debugging round','In this round the contestants will be given codes comprising of errors in it. The contestants are supposed to debug the code. Each correct answer will fetch 4 points. Top 4 teams qualify. ',
            'Round 3 - Final round','The contestants have to find the logical solu on to the given ques on and code it out. The team to complete the task fastest wins.'
            ],
            prize:['Rs. 2500','Rs. 1500']
        },
        {id: '4', title: 'Let The Design Speak',
        shortdesc:'T-shirt Designing',
         day:'4th October', 
         time:['1:30pm - 3:00 pm'],
         venue: 'IT dept library',
         team: '2 per team',
         coordinator:['Siddesh - 95511827458','Aabid - 9511683204'],
         faculty:['Siddhi Naik','Deepali Raikar'],
         rules:[
             'Participants need to carry their own laptop.',
             'Any software can be used.',
             'Each team can submit a maximum of two designs.',
             'Once the design has been submitted it cannot be changed or edited.',
             'Participants are required to include \'INTENSA\' name in the t-shirt design.',
             'All designs need to be in house and use of 3rd party designs and copyrighted material is prohibited.'
         ]
        },
        {id: '5', title: 'Brain Wars', 
         day: '4th October',
         time: ['10.00 AM - 1.00 PM'],
         collab:'GEC Quiz Club',
         shortdesc:'A tech and GK quiz.',
         venue: 'IT Auditorium',
         team: 'Max. 2 participants.',
         coordinator:['Aman Parab - 9175868051','Vrajesh Natekar - 7378698699'],
         faculty:['Dr. Aisha Fernandes','Vaishali Shirodkar'],
         rules:[
             'Preliminary round will be held to select 6 teams for onstage round.',
             'Any number of teams can participate from a college.',
             'Max. 2 teams from a college can make it to the stage round.',
             'Rest of the rules will be explained at the venue.',
             'Carry your ID cards.'
         ],
         prize:['Rs. 3,000','Rs. 2,000']

        },
        {id: '6', title: 'Forager', 
        day:'3rd October',
        time:['1:00 PM onwards'],
        shortdesc:'Treasure Hunt',
        venue:'IT auditorium', 
        team: 'Max 3 participants',
        coordinator:['Arya - 9673642678','Pradnya - 8805206934','Nishi - 9673335332'],
        faculty:['Deepali Raikar','Siddhi Naik'],
        rules:[
            'A preliminary round basend on FINTECH(MCQs) will be to select 5 teams for final round.',
            'The selected 5 teams will participate for the Treasure Hunt.',
            'The treasure hunt consists of 5 clues that will lead you to final treasure.'
            ,'The location will be limited to GEC campus.'
        ],
        prize:['Rs. 2,000','Rs. 1,000']
        },
        {id: '7', title: 'Photography', 
         day:'4th October',
         time:['Submissions at 10:00 AM - 11:00 AM'],
         venue:['Registrations at Chalk Talk - I, IT dept.'],
         coordinator: ['Adarsh : 8208804297','Ajay Gaunekar - 8788202055'],
         rules:[
             'Theme will be posted on our official Instagram account(@GECINTENSA) and here on 3rd October.',
             'Entries should be submitted from 10:00 AM - 11:00 AM',
             'All images must be provided with a caption.',
             'Advanced Editing of photo is provided, only cropping i allowed.',
             'Photo should be submitted in jpeg or png format.',
             'Participants are allowed to use any cameras.',
             'Violation of above rules will lead to disqualification.'
            ],
         prize:['Rs. 2000','Rs. 1000']

        },
        {id: '8', title: 'Meme on It', 
         day:'4th October',
         time:['11:00 AM - 12:00 PM'],
         venue:'Registrations at Chalk Talk - I, IT dept.',
         coordinator:['Adarsh - 8208804197','Divyashri - 7517450420'],
         rules:[
             'Theme will be posted on our official Instagram account(@GECINTENSA) and here.',
             'Participants should register & submit entries between 11:00 AM - 12:00 AM',
             'Meme should be sumbited in jpeg or png format.',
             'Any kind of vulgarity will not be tolerated.',
             'Avoid making dark memes/memes on sensitive issues.',
             'Violation of above rules will lead to disqualifcation'
         ],
         prize:['Rs. 1000','Rs. 500']
        },

        {id: '9', title: 'Spark AR',
         day:'',       
         collab:'DevCluster Goa',
         time:[''],
         team:[],
         venue:[''],
         coordinator:['Vipul : 9763127957','Priyanka - 8806667565'],
         rules:['Carry a fully charged laptop.'],
         prize:[],},

         {id: '10', title: 'Github Pages',
         day:'',
         collab:'FOSS Community GEc',
         time:[''],
         team:[],
         venue:[''],
         coordinator:['Sanjeet: 9923638478','Delora - 707571818'],
         rules:['Carry a fully charged laptop.'],
         prize:[]}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer