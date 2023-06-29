import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //@Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  //@Output() updateUsersRegister = new EventEmitter();

  model: any = {}

  constructor(public accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  register(){
    this.accountService.register(this.model).subscribe({
      next: () => this.cancel(),
      error: error => {
        this.toastr.error(error.error); // Todo: This needs to be fixed
      }
    });
  }

  cancel(){
    this.cancelRegister.emit(false)
  }
}
