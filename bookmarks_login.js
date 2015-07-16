function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

function MatchString(str,name)
{
     var reg = new RegExp("(^|@)"+ name +"=([^@]*)(@|$)");
     var r = str.match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

function MyReg(ele,reg_str,val)
{
	var reg = new RegExp(reg_str,"ig");
    if(reg.test(jQuery(ele).attr("name"))){jQuery(ele).val(val);return true;}
	if(reg.test(jQuery(ele).attr("id"))){jQuery(ele).val(val);return true;}
	if(reg.test(jQuery(ele).attr("class"))){jQuery(ele).val(val);return true;}
}

function My_Click(ele,reg_str)
{
	var reg = new RegExp(reg_str,"ig");
    if(reg.test(jQuery(ele).attr("name"))){jQuery(ele).click();return true;}
	if(reg.test(jQuery(ele).attr("id"))){jQuery(ele).click();return true;}
	if(reg.test(jQuery(ele).attr("class"))){jQuery(ele).focus().click();return true;}
}

function My_Select(ele,reg_str,categories_name)
{
	var reg = new RegExp(reg_str,"ig");
    if(reg.test(jQuery(ele).attr("name")))
	{
		jQuery(ele).children("option").each(function(){
									   if(jQuery(this).text()==categories_name){jQuery(this).attr("selected",true);}
									   
							}); 
	}
}

function My_Select2(ele,reg_str,selector,categories_name)
{	
	var reg = new RegExp(reg_str,"ig");
    if(reg.test(jQuery(ele).attr("name"))){
			  jQuery(selector).each(function(){ 
								   if(jQuery(this).text()==categories_name){
									   jQuery(ele).val(jQuery(this).attr("name"));
									}
					         }); 
	}
	
}

	


//这一句不能少
//jQuery.noConflict();

// 使用jq的--将原来$改成jQuery
jQuery(document).ready(function(){ 
    var exit=false;
	var login_name="promdressbycolor@gmail.com",login_email="promdressbycolor@gmail.com",login_pwd="dieyoung";
	switch(document.domain)
	{
		case "www.manteresting.com":
			jQuery("#edit-field-category-und").val("53");
		break;
	}
	jQuery("input").each(function(){
			MyReg(jQuery(this),'(.*?)login(.*?)',login_name);	
			MyReg(jQuery(this),'(.*?)log(.*?)',login_name);
			MyReg(jQuery(this),'(.*?)email(.*?)',login_email);	
			
			MyReg(jQuery(this),'(.*?)password(.*?)',login_pwd);				  
			MyReg(jQuery(this),'(.*?)pswd(.*?)',login_pwd);
			MyReg(jQuery(this),'(.*?)pass(.*?)',login_pwd);
			MyReg(jQuery(this),'(.*?)pwd(.*?)',login_pwd);

	}); 
	if(exit){return;}  //如是不执行下面就退出
	jQuery("input[type='submit']").click();
	
    var button_arr=new Array("text-btn-primary","button","login_btn","primary","btnGreen","share","submit");//
	jQuery("button").each(function(){				   
			for(var i in button_arr)
			{
				if(My_Click(jQuery(this),'(.*?)'+button_arr[i]+'(.*?)') ){ return; }
			}			   
			//My_Click(jQuery(this),'(.*?)save(.*?)');
	});
	 
});

function select_board(selector,categories_name)
{
	jQuery(selector).each(function(){if(jQuery(this).text()==categories_name){jQuery(this).attr("selected",true);}}); 
}
//javascript:var%20dao_url='http://127.0.0.2/nzpromdress/';(function(){document.body.appendChild(document.createElement('script')).src=dao_url+'jquery-1.7.1.min.js';document.body.appendChild(document.createElement('script')).src=dao_url+'bookmarks_login.js';})();

//javascript:var dao_url='https://www.straplessprom.com/';(function(){document.body.appendChild(document.createElement('script')).src=dao_url+'js/jquery-1.7.1.min.js';document.body.appendChild(document.createElement('script')).src=dao_url+'js/bookmarks_pin.js';})();
