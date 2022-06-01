import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ethers } from 'ethers';
import polling from '../../../../utils/NewPolling.json';


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

  constructor(public dialogRef: MatDialogRef<CategoryDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
      this.details = data;
  }

  ngOnInit(): void {
  }

  async vote() {
    //   try {
    //   const ethereum = (window as any).ethereum;
    //   if (ethereum) {
    //     const provider = new ethers.providers.Web3Provider(ethereum);
    //     const signer = provider.getSigner();
    //     const wavePortalContract = new ethers.Contract(this.contractAddress, this.contractABI, signer);
    //     const fullName = this.details.firstName + this.details.lastName;
    //     const count1 = await wavePortalContract['vote'](fullName);
    //     alert('Thank you for your vote')
    //   } else {
    //     console.log('Ethereum object doesnt exist');
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  }

  cancel() {

  }
}
