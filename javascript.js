<script type="text/javascript">
    var alerted = localStorage.getItem('alerted') || '';
    if (alerted != 'yes') {
     alert("Dette er et skoleprojekt");
     localStorage.setItem('alerted','yes');
    }
</script>