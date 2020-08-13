<?php

foreach(glob("views/*.html") as $filename) {
    include_once($filename);
}
foreach(glob("scripts/*.js") as $filename) {
    include_once($filename);
}
foreach(glob("vendor/*.css") as $filename) {
    include_once($filename);
}
foreach(glob("vendor/*.js") as $filename) {
    include_once($filename);
}
foreach(glob("styles/*.css") as $filename) {
    include_once($filename);
}


?>