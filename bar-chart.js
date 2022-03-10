
function customizeCss(newValue, options, htmlElement)  
{ return $(htmlElement).css((options), $(newValue).val());  }

function customizeText(newValue, htmlElement)
{ return $(htmlElement).text($(newValue).val());  }

function appendBar(barValue, appendto, barColor)
{
return $(appendto).append('<div class ="barInsert" style = "background-color: ' + $(barColor).val() + ';height:' + $(barValue).val() + 'px;"><p class = "barInsertText">' + $(barValue).val() + '</p></div>');}


//shorthand for $(document).ready(function()//shorthand for $(".button_title").click(function()

$(function(){
  $(".button_title").on("click", function()
  { customizeCss(".bar_text_color", "color", "h2.title");   //$("h1").css("color", $(".bar_text_color").val());
    customizeCss(".bar_title_font_size", "font-size", "h2.title");
    customizeText(".bar_chart_title", "h2.title");  });
  $(".button_empty_graph").on("click", function()
  { 
    customizeCss(".x-axisMax", "width", "div.chart");//$("div.chart").css("height", $(".y-axisMax").val()); 
    customizeCss(".y-axisMax", "height", "div.chart");  
    customizeCss(".x-axisMax", "width", "div.chartLegendX"); //scaling x axis legend division the same size as max value of x axis
    customizeText(".yAxisTitle", "h3.chartLegendY");  
    customizeText(".xAxisTitle", "h3.chartLegendX"); 
    customizeText(".y-axisMax", "p.chartLegendY");  
  });
   $(".button_barInsert").on("click", function()
   { appendBar(".barValue", ".chart", ".barColor");
  });

  $(".button_clearAll").on("click", function()
   { $(".chart").empty();});
});
 

