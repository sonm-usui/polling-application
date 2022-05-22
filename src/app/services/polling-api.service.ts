import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PollingApiService {

  pollForm!: AngularFirestoreCollection<any>;

  constructor(private fireStore: AngularFirestore) {
      this.pollForm = fireStore.collection<any>('polling-app');

  }

  setBook(value: any) {
       this.pollForm.add(value);
  }

  setHero(value: any) {
       
  }
}
