import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';
import { ProfileService } from './data/services/profile.service';
import { JsonPipe } from '@angular/common'; //эта строчка
import { Profile } from './data/interfaces/profile.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileCardComponent, JsonPipe], // эта строчка
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tik-talk';

  profileService = inject(ProfileService);
  profiles: Profile[] = [];

  imgUrl!: string;

  constructor() {
    //подписались на ответ метода getTestAccounts,
    //присвоили значения массиву profiles

    this.profileService.http
      .get<Profile[]>('https://icherniakov.ru/yt-course/account/test_accounts')
      .subscribe((v) => {
        this.profiles = v;
      });

    //   this.profileService.getTestAccounts().subscribe((v) => {
    //     this.profiles = v;
    //   });
  }
}
