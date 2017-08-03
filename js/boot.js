window.fbAsyncInit = function ()
{
	FB.init(
	{
		appId : '121960105104268',
		xfbml : true,
		version : 'v2.9'
	});
	FB.AppEvents.logPageView();
};

(function (d, s, id)
{
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id))
	{
		return;
	}
	js = d.createElement(s);
	js.id = id;
	js.src = "https://connect.facebook.net/it_IT/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$("#letMeIn").on('click', function ()
{
	$(this).prop("disabled", true);

	FB.login(function ()
	{
		$("#letMeIn").attr("disabled", "")
		$("#cout").text(FB.getAccessToken());
	},
	{
		scope : 'publish_actions'
	});

});