import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    createSolution: function(answer) {
      var points = function () {
        var timeAtSubmission = new Date();
        var timeAtStart      = new Date().setHours(8,30,0,0);
        var secondsFromStart = (timeAtSubmission - timeAtStart)/1000;
        if (parseInt(2000 - secondsFromStart, 10) > 0) {
          return parseInt(2200 - secondsFromStart, 10);
        } else {
          return 200;
        }
      };
      var solution = this.store.createRecord('solution', {
        content: answer,
        posse_id: 1,
        problem_id: 1,
        points_earned: points()
      });
      solution.save();
      this.transitionTo('solutions');
    }
  }
});
