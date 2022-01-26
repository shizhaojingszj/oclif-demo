common:=cd ../newcli &&

just-run:
	cd ../newcli && \
	bin/run

hello-help:
	$(common) \
	bin/run hello --help

world-help:
	$(common) \
	bin/run hello world --help

hello-world:
	$(common) \
	   bin/run hello world

hello-Billy-from-zhaomeng:
	$(common) \
	   bin/run hello --from zhaomeng Billy

all:
	make hello-Billy-from-zhaomeng
	make hello-world