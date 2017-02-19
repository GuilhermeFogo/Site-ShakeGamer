$(document).ready(function() {

	//Parte Moblie do menu
	$('#DROP').css('background','#222');

		//botao brincadeira  na pagina Quem-Somos
	$('#bricadeira').click(function(){
		alert('Isto é um portifolio feito por: Guilherme Fogo para contato Email: gui.fogo17@gmail.com');
	});

	// 	//Valiar formulario na pagina de Fale-conosco
	// $(function validar_form() {
	// 	$('#submit').click(function(){
	// 	if($('#nome_usuario').val()==""){
	// 		alert('Preencha o campo Nome');
	// 	return false;
	// 	}

	// 	if($('#Telefone').val()==""){
	// 		alert('Preencha o campo Telefone');
	// 	return false;
	// 	}

	// 	if($('#email').val()==""){
	// 		alert('Preencha o campo Email');
	// 	return false;
	// 	}

	// 	if($('#Mensagem').val()==""){
	// 		alert('Preencha o campo da Mensagem');
	// 	return false;
	// 	}
		
	// 	})
	// }) //validar-form


			//Fazendo o Menu desaparecer e aparecer
		$(window).scroll(function () {
		 var topo = $(window).scrollTop();
		 	if (topo>20){
		 		$('.suspenso').fadeOut('1000');
		 	}else{
		 		$('.suspenso').fadeIn('1000');
		 	}
		})
			//fazendo uma especie de hover na imagem da pagina Manutenção 
		$('#hoverjs').mouseover(function(){
			$('#hoverjs').attr('src', 'img/conserto-pc.jpg');
			$('#hoverjs').delay('5000');

		}).mouseout(function(){
			$('#hoverjs').attr('src', 'img/manutencaopc.jpg');
			$('#hoverjs').delay('5000');

		});//#hoverjs


})