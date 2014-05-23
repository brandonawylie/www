<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="description" content="brandon dalesandro's personal website">
  <title>brandon dalesandro</title>
  <link rel="stylesheet" href="../css/normalize.css">
  <link rel="stylesheet" href="../css/bootstrap.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <?php require 'getMp3Info.php'; ?>
		<div id="currentSong">
			song: artist: 
		</div>
    <div id="musicPlayer">
		<audio controls id="player">
	 <source src="music/03 - Soma.mp3">
	 <!-- The next line will only be executed if the browser doesn't support the <audio> tag-->
	 <p>Your user agent does not support the HTML5 Audio element.</p>
		</audio>
  </div>
	<table id="songList">
    <tr><td>Song</td><td>Artist</td><td>Album</td></tr>            

    <?php $out = scandir("music/");  foreach($out as $x): ?>
        <tr>
          <?php if($x != "." && $x != ".."):
            $tag = tagReader("music/".$x);
          ?>
          <td><?=str_replace('#', '', str_replace(')', '', str_replace('!', '', $tag["Title"]))); ?> </td>
          <td><?=$tag["Author"]; ?> </td>
          <td><?=$tag["Album"]; ?> </td>
          <td class="f" style="display:none;"><?=$tag["FileName"]; ?> </td>
          <?php endif; ?>
        </tr>
    <?php endforeach;?>
	</table>


  <script src="../js/libs/jquery.js"></script>
  <script src="../js/libs/jquery.smooth-scroll.js"></script>
  <script src="js/script.js"></script>
  <script src="../js/bootstrap.js"></script>
</body>
</html>