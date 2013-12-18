
test:
	@./node_modules/.bin/mocha \
		--require should \
		--reporter dot \
		--harmony \
		--bail

.PHONY: test