<?php
	class user_misc {
	  		function importRSS($content, $conf) {
			$rss = simplexml_load_file($conf['ruta']);
			$cadena = '';
			$etiquetas = array("&lt;em&gt;","&lt;/em&gt;","&lt;i&gt;","&lt;/i&gt;");
			$cont = 0;
			foreach ($rss as $channel)
			{
				foreach ($channel as $item)
				{
					if ($item->title != NULL && $item->title != '' && $item->description != NULL && $item->description != '' && $cont < 9)
					{
						$cadena = $cadena . '<li><div class="imagen"><img src="' . $item->feed_img . '" alt="' . $item->title . '"></div><div class="etiqueta">';
						$cadena = $cadena . '<a href="' . $item->link . '" target="_blank">' . str_replace($etiquetas,"",$item->title) . '</a>';
						// echo '<p>' . $item->description . '</p>';
						$cadena = $cadena . '</div></li>';						
						if ($item->feed_img == '' && $cont == 0)
						{
							$cadena = '';
						}
						$cont = $cont + 1;
					}
				}
			}
			return $cadena;
		}
	}
?>