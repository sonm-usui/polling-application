import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PollingApiService } from '../../services/polling-api.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent implements OnInit {

  pollForm!: FormGroup;
  constructor( private fb: FormBuilder, private apiService: PollingApiService) { }

  ngOnInit(): void {
     this.pollForm = this.fb.group({
       firstName: [''],
       lastName: [''],
       email: [''],
       description: [''],
       category: [''],
     })
  }

  createPoll() {
    if(this.pollForm.get('category')?.value === 'book'){
       this.apiService.setBook(this.pollForm.value);
    } else {
       this.apiService.setHero(this.pollForm.value);
    }
  }
}
