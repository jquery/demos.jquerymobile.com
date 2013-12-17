for i in `find . -name "*.html" -print | xargs grep "data-main" | sed 's/:.*//'`; do
  sed 's/\t<script src=".*js\/jquery.js"><\/script>//' $i > "$i-bkup"
  mv "$i-bkup" $i
done

for i in `find . -name "*.html" -print | xargs grep "data-main" | sed 's/:.*//'`; do
  nesting=$(echo "$i" | sed 's/\.\///' | sed 's/[a-zA-Z0-9\-]\+.html//' | sed 's/[a-zA-Z0-9\-]\+\//..\//g')
  sed 's/<script data-main.*<\/script>/<script src="js\/jquery.js"><\/script>\n\t<script src="docs\/_assets\/js\/jqm-docs.js"><\/script>\n\t<script src="js\/"><\/script>/' $i | sed 's@<script src="js/jquery.js"></script>@<script src="'$nesting'js/jquery.js"></script>@' | sed 's@<script src="js/"></script>@<script src="'$nesting'js/"></script>@' | sed 's@<script src="docs/_assets/js/jqm-docs.js"></script>@<script src="'$nesting'docs/_assets/js/jqm-docs.js"></script>@' > "$i-bkup"
  mv "$i-bkup" $i
done
