

    document.addEventListener('DOMContentLoaded', function (event) {
      var now = new Date();
      var months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

      var els = document.getElementsByClassName('current-date');
      for (var i = 0; i < els.length; i++) {
        els[i].innerText = months[now.getMonth()] + ' ' + now.getDate() + ', ' + now.getFullYear();
      }
    });

