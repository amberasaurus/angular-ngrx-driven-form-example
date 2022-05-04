import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Address } from 'src/app/state/reducers';

@Component({
  selector: 'address-list',
  templateUrl: 'address-list.component.html',
})
export class AddressListComponent implements OnInit {
  @Input()
  set data(values: Address[] | undefined) {
    this.addressFormArray.clear();

    if (values) {
      values.forEach((address) => {
        this.addressFormArray.push(this.createAddressFormGroup(address));
      });
    }
  }

  @Output() addAddress = new EventEmitter<void>();

  addressFormGroup: FormGroup = this.fb.group({
    addresses: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  createAddressFormGroup(address: Address) {
    return this.fb.group({
      street: [address.street],
      city: [address.city],
      state: [address.state],
    });
  }

  get addressFormArray(): FormArray {
    return this.addressFormGroup.get('addresses') as FormArray;
  }
}