import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { TOASTR_TOKEN } from './toastr.token';
import { IToastr } from './IToastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  constructor(@Inject(TOASTR_TOKEN) private toastr: IToastr) { }

  success(message: string, title?: string) {
    this.toastr.success(message, title);
  }

  info(message: string, title?: string) {
    this.toastr.info(message, title);
  }

  warning(message: string, title?: string) {
    this.toastr.warning(message, title);
  }

  error(message: string, title?: string) {
    this.toastr.error(message, title);
  }
}
