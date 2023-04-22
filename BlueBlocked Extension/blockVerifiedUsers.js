var verifiedUsers = document.querySelectorAll('.css-18t94o4[data-testid="UserBadge"]');

for (var i = 0; i < verifiedUsers.length; i++) {
  var user = verifiedUsers[i].parentNode.parentNode.parentNode;
  user.style.display = 'none';
}
