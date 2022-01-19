jQuery(document).ready(function($){
	$(window).ready(function(){
		var tablas = $("table"), t, fil, col;
		
		for (t = 0; t < tablas.length; t++)
		{
			for (fil = 1; fil < tablas[t].rows.length; fil++)
			{
				for (col = 0; col < tablas[t].rows[0].cells.length; col++)
				{
					tablas[t].rows[fil].cells[col].setAttribute("data-th", tablas[t].rows[0].cells[col].textContent);
				}
			}
		}
	});
});