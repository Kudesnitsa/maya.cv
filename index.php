<?php
$dir    = './';
$files = scandir($dir);
foreach ($files as $file){
    if (strpos($file, '.html'))  print_r( " <a href='$file'>$file </a><br>");


}

//print_r($files2);*/

