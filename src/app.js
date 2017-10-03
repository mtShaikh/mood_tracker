import { Mood } from './mood';

export class App {
  constructor() {
    this.heading = 'Mood Tracker!';
    this.moods = [];

    this.moodRating = 0;
    this.moodTrigger = '';
    this.moodDescription = '';
    this.moodImplication = '';
  }

  addMood() {
    let mood = new Mood(
      this.moodRating,
      this.moodTrigger,
      this.moodDescription,
      this.moodImplication
    );
    this.moods.push(mood);

    console.log(mood);

    this.moodRating = 0;
    this.moodTrigger = '';
    this.moodDescription = '';
    this.moodImplication = '';
  }

}
