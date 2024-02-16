import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  scoreData=[
    { img:'../../assets/img/equifax.jpg', score: 751, date: 'Aug 24, 2023', increseScore:'+82', startScore:669, creditInq:'04', publicRec:'01',collection:'01',lp:'12', secondCard: {credits:'18%', lastMonth:'25%', scoreChange:'-6'}, positive:{text:'Positive', count:48}, negative:{text:'Negative', count:11}},
    { img:'../../assets/img/experian.jpg', score: 764, date: 'Aug 24, 2023', increseScore:'+65', startScore:699,creditInq:'02', publicRec:'00',collection:'01',lp:'02', secondCard:{credits:'17%', lastMonth:'25%', scoreChange:'-12'}, positive:{text:'Positive', count:23}, negative:{text:'Negative', count:5}},
    { img:'../../assets/img/transUnion.jpg', score: 623, date: 'Aug 24, 2023', increseScore:'+17', startScore:606,creditInq:'13', publicRec:'02',collection:'02',lp:'04', secondCard:{credits:'16%', lastMonth:'25%', scoreChange:'-7'}, positive:{text:'Positive', count:31}, negative:{text:'Negative', count:15}},
    { img:'../../assets/img/experian.jpg', score: 649, date: 'Aug 24, 2023', increseScore:'-04', startScore:518,creditInq:'13', publicRec:'02',collection:'01',lp:'18', secondCard: {credits:'21%', lastMonth:'25%', scoreChange:'4'}, positive:{text:'Positive', count:23}, negative:{text:'Negative', count:15}}
  ]
  
  credits = [
    {credits:'18%', lastMonth:'25%', scoreChange:'-6'},
    {credits:'17%', lastMonth:'25%', scoreChange:'-12'},
    {credits:'16%', lastMonth:'25%', scoreChange:'-7'},
    {credits:'21%', lastMonth:'25%', scoreChange:'4'},
  ]

  lastSec = [
    {cardTitle:'Prifile & Login Information', subtitle:'Keep all your contact information up to date, and manage your logins', bg:'#f6f7fe', imgPath:'../../assets/img/profile-img.png', borderColor: '#f6f7fe', borderStyle: '2px solid'},
    {cardTitle:'Subscription & Billing', subtitle:'Update your credit / debt card on file, and manage your subscription',bg:'#fbf8fe', imgPath:'../../assets/img/billing-img.png', borderColor: '#fbf8fe', borderStyle: '2px solid'},
    {cardTitle:'Message Center', subtitle:'Do you need assistance with your account or credit report? Speak to a pro',bg:'#fef9f9', imgPath:'../../assets/img/support-img.png', borderColor: '#fef9f9', borderStyle: '2px solid'},
    {cardTitle:'Logout of Account', subtitle:'All done for this session? Click Here to Logout of your account',bg:'#f5faff', imgPath:'../../assets/img/logout-img.png', borderColor: '#f6f7fe', borderStyle: '2px solid'},
  ]


}
