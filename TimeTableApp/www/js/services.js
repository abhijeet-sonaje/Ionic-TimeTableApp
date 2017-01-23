angular.module('starter.services', [])

  .factory('TimeTableData', function () {
    // Some Time Table testing data
    var timetableData = {
      'Sunday': [{
        id: 0,
        time: '9.00-10.00',
        subject: 'PADC',
        professor: 'GD'
      }, {
        id: 1,
        time: '10.00-11.00',
        subject: 'OOPM',
        professor: 'SYC'
      }, {
        id: 2,
        time: '11.00-11.15',
        subject: 'Small Break',
        professor: ''
      }, {
        id: 3,
        time: '11.15-12.15',
        subject: 'DB',
        professor: 'RHS'
      }, {
        id: 4,
        time: '12.15-1.15',
        subject: 'Maths 3',
        professor: 'MN'
      }, {
        id: 5,
        time: '1.15-2.00',
        subject: 'Lunch Break',
        professor: ''
      }, {
        id: 6,
        time: '2.00-3.00',
        subject: 'ADC',
        professor: 'PG'
      }, {
        id: 7,
        time: '3.00-4.00',
        subject: 'DSA',
        professor: 'PBB'
      }, {
        id: 8,
        time: '4.00-5.00',
        subject: 'CS',
        professor: 'MG'
      }]
    };

    return {
      allData: function () {
        return timetableData;
      },
      getTimeTable: function (prof_name) {
        var date = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        var day = weekday[date.getDay()];
        var daytt = timetableData[day];
        for (item of daytt) {
          if (item.subject != 'Small Break' && item.subject != 'Lunch Break') {
            if (item.professor != prof_name)
              item.subject = '';
          }
        }
        return daytt;
      }
    };
  })


  .factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/mike.png'
    }];

    return {
      all: function () {
        return chats;
      },
      remove: function (chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function (chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  });
