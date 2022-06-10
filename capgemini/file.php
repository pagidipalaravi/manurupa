<?php
$file_name = $ FILES ['file']['name'];
$tmp_name = $ FILES ['file'][temp_name];
$file_up_name = time ().$file_name;
move_uploaded_file($tmp_name, "files/".$file_up_name);
?>