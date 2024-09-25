import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LinksService } from '../../../shared/services/links.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  formLink!: FormGroup;

  private formBuilder = inject(FormBuilder);
  private linksService = inject(LinksService);

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formLink = this.formBuilder.group({
      url: ['', [Validators.required]],
      identifier: ['', [Validators.required]],
      key: ['', [Validators.required]],
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.formLink.invalid) {
      this.formLink.reset();
      return;
    }
    this.linksService.createLink(this.formLink.value).subscribe({
      next: () => {
        this.formLink.reset();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
