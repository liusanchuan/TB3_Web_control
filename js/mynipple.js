var twist;
var manager;

var ros =new ROSLIB
function createJoystick() {

    joystickContainer = document.getElementById('joystick');

    manager = nipplejs.create({
        zone: joystickContainer,
        position: { left: 65 + '%', top: 50 + '%' },
        mode: 'static',
        size: 200,
        color: '#ffffff',
        restJoystick: true
    });

    manager.on('move', function (evt, nipple) {

        var lin = Math.sin(nipple.angle.radian) * nipple.distance * 0.01;
        var ang = -Math.cos(nipple.angle.radian) * nipple.distance * 0.01;

        twist.linear.x = lin * max_linear_speed;
        twist.angular.z = ang * max_angular_speed;
    });

    manager.on('end', function () {
        twist.linear.x = 0
        twist.angular.z = 0
    });
}
window.onload = function(){
    createJoystick();
}