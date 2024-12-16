//modal JS
import $ from 'jquery';
import select2 from 'select2';
import {wilaya, commune} from "./wilaya.js";
select2();


const categories = [
    {id:1,text:'Pièces Mécaniques et Electriques'},
    {id:2,text:'Carrosserie et Optiques'},
    {id:3,text:'Vitre et Parebrises'},
    {id:4,text:'Pneumatique'},
  ];
  const brands = [
    {id:1,text:'PEUGEOT / RENAULT / CITROEN / DACIA'},
    {id:2,text:'GROUPE VAG'},
    {id:3,text:'FORD / OPEL'},
    {id:4,text:'TOYOTA / NISSAN / MITSUBISHI / DAIHASU'},
    {id:5,text:'KIA / HYUNDAI / SUZUKI / CHEVROLET / DFM / CHERRY'},
    {id:6,text:'FIAT'},
    {id:7,text:'TATA / MAHINDRA'},
    {id:8,text:'ASIATIQUES'},
  ];
  var districts = [];
  
  $('.state').select2({
    placeholder: 'Wilaya',
    width: '100%',
    theme: "bootstrap4",
    // allowClear: true,
    data:wilaya
  });
  
  $('.district').select2({
    placeholder: 'Commune',
    width: '100%',
    theme: "bootstrap4",
    // allowClear: true,
    data:districts
  });
  
  $('.category').select2({
    placeholder: 'Catégorie',
    width: '100%',
    theme: "bootstrap4",
    // multiple:true,
    allowClear: true,
    data:categories
  });
  
  $('.brand').select2({
    placeholder: 'Marques Proposées',
    width: '100%',
    theme: "bootstrap4",
    // multiple:true,
    allowClear: true,
    data:brands
  });
  
  $('.state').on('change',function(){
    var selectedState = $(this).val(); // Get the selected values
  
    // Iterate over the data object to find matches
    districts = commune[selectedState]; 
    // Clear the current options in the district select dropdown
    $('.district').empty().append('<option value="">Select a District</option>');
    // Add new filtered districts to the district dropdown
    districts.forEach(district => {
      $('.district').append(new Option(district.text, district.id));
    });
  
    // Trigger Select2 to refresh
    $('.district').trigger('change');
    
  });
  
  // When the modal is shown, add the blue background
  $('#myModal').on('show.bs.modal', function () {
    $('#myModal').addClass('modal-open');
  });
  
  // When the modal is hidden, remove the blue background
  $('#myModal').on('hidden.bs.modal', function () {
    $('#myModal').removeClass('modal-open');
    $('#myModal').css('top') != 0 ? $('#myModal').css('top',0) : "";
  });

  $('.btn-submit').on('click', function () {
    $('.info').removeClass('d-none');
  });

  $('.middle').on('click',function(){
    // Get the current scroll position
    var scrollValue = $(window).scrollTop();

    // Calculate total scrollable height
    var totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate the equivalent vh value
    var vhEquivalent = (scrollValue / totalScrollableHeight) * 100;

    $('#myModal').css('top',`${vhEquivalent.toFixed(2)-17}%`);

    console.log($('#myModal').css('top'),vhEquivalent);
  });
  $('.bottom').on('click',function(){
    // Get the current scroll position
    var scrollValue = $(window).scrollTop();

    // Calculate total scrollable height
    var totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate the equivalent vh value
    var vhEquivalent = (scrollValue / totalScrollableHeight) * 100;

    $('#myModal').css('top',`${vhEquivalent.toFixed(2)-25}%`);
  });