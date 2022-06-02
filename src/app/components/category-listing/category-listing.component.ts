import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { EtherService } from '../../services/ether.service';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.scss']
})
export class CategoryListingComponent implements OnInit {

   isHeroPoll: boolean = true;
   heroList = [{
      firstName: 'Lalit',
      lastName: 'Pokhrel',
      description: `I am a software engineer and a web developer. I am passionate about building web applications and solving problems. Motivated junior web developer looking for a role as full-stack web developer at SoftwareX. Passionate about building first-class web applications. Developed an e-commerce website for a local fashion retailer while at University X. Relevant skills include DNS Management, Database, Debugging, and more.`,
      image: 'https://testasmpublic-14e65.kxcdn.com/1653235566_6e861319fbc9abe3cb513888a90479_lalit.jpeg',
      email: 'lalit.pokhrel@selise.ch'
   },
   {
      firstName: 'Jigme',
      lastName: 'Namgyel',
      description: `I am a software engineer and a web developer. I am passionate about building web applications and solving problems.Motivated junior web developer looking for a role as full-stack web developer at SoftwareX. Passionate about building first-class web applications. Developed an e-commerce website for a local fashion retailer while at University X. Relevant skills include DNS Management, Database, Debugging, and more.`,
      image: 'https://testasmpublic-14e65.kxcdn.com/1653235873_060fd2716489f58ef33878cd8b588a_JTN.jpeg',
      email: 'jigme.namgyel@selise.ch'
   },
   {
      firstName: 'Jigme',
      lastName: 'Jamtsho',
      description: `I am a business analyst. I am passionate about building web applications and solving problems.Motivated junior web developer looking for a role as full-stack web developer at SoftwareX. Passionate about building first-class web applications. Developed an e-commerce website for a local fashion retailer while at University X. Relevant skills include DNS Management, Database, Debugging, and more.`,
      image: 'https://testasmpublic-14e65.kxcdn.com/1653235881_0aa0c9d755ac1ee2bc7f4ca453d588_JJ.jpeg',
      email: 'jigme.jamtsho@selise.ch'
   }
   ];


   bookList = [{
      firstName: 'Harry',
      lastName: 'Potter',
      description: 'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry\'s struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).',
      image: 'https://testasmpublic-14e65.kxcdn.com/1652999675_56815616dbd7146cd2745998abe861_harry-potter-book-sets.jpg.webp',
      email: 'j.krowling@selise.ch'
   },
   {
      firstName: 'The Book',
      lastName: 'Thief',
      description: `The Book Thief is a novel by the Australian author Markus Zusak, and is his most popular book. Published in 2005, The Book Thief became an international bestseller and was translated into 63 languages and sold 16 million copies. It was adapted into the 2013 feature film, The Book Thief.
The novel is about the adventures of Liesel Meminger in Germany during a time of war. By personifying "Death" as a tangible thing, the novel narrates a unique perspective into the world of the victims of the war.`,
      image: 'https://testasmpublic-14e65.kxcdn.com/1652999874_f3ce26399913e6969c701dc76309ae_bookthirf.webp',
      email: 'the.book@selise.ch'
   },
   {
      firstName: 'The Da-Vinci',
      lastName: 'Code',
      description: `The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown. It is Brown's second novel to include the character Robert Langdon: the first was his 2000 novel Angels & Demons. The Da Vinci Code follows "symbologist"[clarification needed] Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ and Mary Magdalene having had a child together.`,
      image: 'https://testasmpublic-14e65.kxcdn.com/1653237868_61adc9ed26ccc54d305d974414e403_the-da-vinci-code.jpeg',
      email: 'davinci@selise.ch'
   }
   ];
  constructor(private route: Router, private dialog: MatDialog, private etherService: EtherService) { }


  ngOnInit(): void {
    this.isHeroPoll = this.route.url.includes('hero');
    // console.log('hello', this.etherService.isAdmin());
  }

  showDetails(details: any) {
      this.dialog.open(CategoryDetailsComponent, {
       width: '90%',
      autoFocus: false,
      panelClass: 'custom-dialog',
         data: details
      }).afterClosed().subscribe()
  }

  addCandiddates(){
  this.heroList.forEach( value => {
    const fullName = value.firstName + value.lastName;
       this.etherService.addCandidates(fullName);
    })
  }

  getCandidate(){
     this.etherService.getCandidate();
  }

  selectWinner() {
   this.etherService.selectWinner();
  }
}
