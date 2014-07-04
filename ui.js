// JavaScript Document
$(document).ready(function()
{
	$('#name,#place').draggable({containment:'document',revert:true });
	
	$('#drop').droppable({hoverClass :'border',tolerance:'touch',accept:'#name',
	
	over:function()
	{
		$('#drop').text('Something has hover overed on me!');
	},
	out:function()
	{
		$('#drop').text('Something has dragged out!');
	},
	drop:function()
	{
		$('#drop').text('Something has dropped out!');
	}
	
	
	
	});
});