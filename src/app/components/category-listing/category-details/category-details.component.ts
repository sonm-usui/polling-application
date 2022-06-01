import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ethers } from 'ethers';
import polling from '../../../../utils/NewPolling.json';
import { EtherService } from '../../../services/ether.service';


@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

details!: any;
 currentAccount: any;
  contractAddress = '0xe117e8EfA2f1CC538c45F3b891E6A5f032C8EEB9';
  contractABI = polling.abi;

  constructor(public dialogRef: MatDialogRef<CategoryDetailsComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any, private etherService: EtherService) {
      this.details = data;
  }

  ngOnInit(): void {
  }

  vote() {
  const fullName = this.details.firstName + this.details.lastName;
   this.etherService.vote(fullName);
   this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}
