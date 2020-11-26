import app from './app';
import database from './database';

database.sync(); //{force: true}); // drop e recria
console.log("Database running at 3006");

app.listen(3001);
console.log('Server running at 3001');

//systemctl restart mariadb.service
// ESTUDAR
/*
# insert the new value into the system config
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

# check that the new value was applied
cat /proc/sys/fs/inotify/max_user_watches

# config variable name (not runnable)
fs.inotify.max_user_watches=524288*/