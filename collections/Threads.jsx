import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export const Threads = new Mongo.Collection('thread');

Meteor.methods({
    'thread.insert'(judul,isi){
        check(judul, String);
        check(isi, String);
        // console.log("log judul "+text+isi);
        Threads.insert({
            judul,
            isi,
            createdAt: new Date(),
            owner: this.userId,
            // username: Meteor.users.findOne(this.userId).username,
        });
    },
    // 'thread.remove'(taskId){
    //     check(taskId, String);
    //     // Tasks.remove(taskId);
    //     const task = Thread.findOne(taskId);
    //     if (task.private && task.owner !== this.userId) {
    //     // If the task is private, make sure only the owner can delete it
    //     throw new Meteor.Error('not-authorized');
    //     }
    // },
    // 'thread.setChecked'(taskId,setChecked){
    //     check(taskId, String);
    //     check(setChecked, Boolean);

    //     // TThreadasks.update(taskId, {$set:{checked:setChecked}});
    //     const task = Thread.findOne(taskId);
    //     if (task.private && task.owner !== this.userId) {
    //     // If the task is private, make sure only the owner can check it off
    //     throw new Meteor.Error('not-authorized');
    //     }
    // },
    // 'thread.setPrivate'(taskId, setToPrivate){
    //     check(taskId, String);
    //     check(setToPrivate, Boolean);

    //     const task = Thread.findOne(taskId);

    //     if (task.owner !== this.userId) {
    //         throw new Meteor.Error('not-authorized');
    //     }

    //     Thread.update(taskId, {$set:{private:setToPrivate}});
    // },
})