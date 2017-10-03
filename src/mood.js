export class Mood {
    constructor(rating, trigger, description, implication) {
        this.timestamp =  Date.now(); // timestamp here
        this.rating = rating; // -9 to +9 [devastated, shaken, …, blah, okay, …, happy, excited]
        this.trigger = trigger; // Trigger [thought, event, person]
        this.description = description;
        this.implication = implication;
    }
}

/* 
Timestamp
Mood (-9 to +9) [devastated, shaken, …, blah, okay, …, happy, excited]
Trigger [thought, event, person]
Describe what caused/ triggered the good or bad mood?
Why is this significant? implications?
 */

// select moods from here
// http://examples.yourdictionary.com/mood-examples.html