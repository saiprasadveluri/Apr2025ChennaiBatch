import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  userForm: FormGroup;
  isEditMode = false;
  userId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Check if we are in edit mode
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.userId = +params['id'];
        this.loadUserData(this.userId);
      }
    });
  }

  loadUserData(id: number): void {
    this.userService.getUsers().subscribe(users => {
      const user = users.find(u => u.id === id);
      if (user) {
        this.userForm.patchValue(user);
      }
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const userData = this.userForm.value;

      if (this.isEditMode && this.userId !== null) {
        // Update user
        this.userService.updateUser(this.userId, userData).subscribe(() => {
          alert('User updated successfully!');
          this.router.navigate(['/userlist']);
        });
      } else {
        // Add new user
        this.userService.addUser(userData).subscribe(() => {
          alert('User added successfully!');
          this.router.navigate(['/userlist']);
        });
      }
    }
  }
}