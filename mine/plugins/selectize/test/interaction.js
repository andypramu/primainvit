(function() {

	var click = function(el, cb) {
		syn.click(el).delay(350, cb);
	};

	// These tests are functional simulations of
	// user interaction, using syn.js. For more information:
	//
	// @see http://v3.javascriptmvc.com/docs.html#&who=syn
	// @see http://bitovi.com/blog/2010/07/syn-a-standalone-synthetic-event-library.html

	describe('Interaction', function() {

		it('should keep dropdown open after selection made if closeAfterSelect: false', function(done) {
			var test = setup_test('<select multiple>' +
					'<option value="a">A</option>' +
					'<option value="b">B</option>' +
				'</select>', {});

				click(test.selectize.$control, function() {
					click($('[data-value=a]', test.selectize.$dropdown_content), function() {
						expect(test.selectize.isOpen).to.be.equal(true);
						expect(test.selectize.isFocused).to.be.equal(true);
						done();
					});
				});
		});

		it('should close dropdown after selection made if closeAfterSelect: true', function(done) {
			var test = setup_test('<select multiple>' +
				'<option value="a">A</option>' +
				'<option value="b">B</option>' +
				'</select>', {closeAfterSelect: true});

			click(test.selectize.$control, function() {
				click($('[data-value=a]', test.selectize.$dropdown_content), function() {
					expect(test.selectize.isOpen).to.be.equal(false);
					expect(test.selectize.isFocused).to.be.equal(true);
					done();
				});
			});
		});

		it('should close and blur dropdown after selection made if closeAfterSelect: true and in single mode' , function(done) {
			var test = setup_test('<select>' +
				'<option value="a">A</option>' +
				'<option value="b">B</option>' +
				'</select>', {closeAfterSelect: true});

			click(test.selectize.$control, function() {
				expect(test.selectize.isOpen).to.be.equal(true);
				expect(test.selectize.isFocused).to.be.equal(true);
				click($('[data-value=a]', test.selectize.$dropdown_content), function() {
					expect(test.selectize.isOpen).to.be.equal(false);
					expect(test.selectize.isFocused).to.be.equal(false);
					done();
				});
			});
		});

		describe('clicking control', function() {

			it('should give it focus', function(done) {
				var test = setup_test('<select>' +
					'<option value="a">A</option>' +
					'<option value="b">B</option>' +
				'</select>', {});

				click(test.selectize.$control, function() {
					expect(test.selectize.isFocused).to.be.equal(true);
					done();
				});
			});

			it('should start loading results if preload:"focus"', function(done) {
				var calls_focus = 0;
				var calls_load = 0;
				var test = setup_test('<select>' +
					'<option value="a">A</option>' +
					'<option value="b">B</option>' +
				'</select>', {
					preload: 'focus',
					load: function(query, done) {
						calls_load++;
						assert.equal(query, '');
						setTimeout(function() {
							done([{value: 'c', text: 'C'}]);
						});
					}
				});

				test.selectize.on('focus', function() {
					calls_focus++;
				});
				click(test.selectize.$control, function() {
					setTimeout(function() {
						assert.equal(calls_focus, 1);
						assert.equal(calls_load, 1);
						done();
					}, 300);
				});
			});

			it('should open dropdown menu', function(done) {
				var test = setup_test('<select>' +
					'<option value="a">A</option>' +
					'<option value="b">B</option>' +
				'</select>', {});

				click(test.selectize.$control, function() {
					expect(test.selectize.isOpen).to.be.equal(true);
					expect(test.selectize.$dropdown.is(':visible')).to.be.equal(true);
					done();
				});
			});

		});

		describe('clicking label', function() {

			it('should give it focus to select', function(done) {
				var inputId = "labeledSelect";
				var label =
					$('<label for="'+inputId+'">select</label>').appendTo('form');

				var test = setup_test('<select id="'+inputId+'">' +
					'<option value="a">A</option>' +
					'<option value="b">B</option>' +
				'</select>', {});

				syn.click(label)
					.delay(0, function() {
						label.remove();
						expect(test.selectize.isFocused).to.be.equal(true);
						done();
					});
			});

			it('should give it focus to input', function(done) {
				var inputId = "labeledInput";
				var label =
					$('<label for="'+inputId+'">input</label>').appendTo('form');

				var test = setup_test('<input id="'+inputId+'" type="text" value="a,b,c,d">', {});

				syn.click(label)
					.delay(0, function() {
						label.remove();
						expect(test.selectize.isFocused).to.be.equal(true);
						done();
					});
			});

		});

		describe('clicking option', function() {

			it('should select it', function(done) {
				var test = setup_test('<select>' +
					'<option value="">Select an option...</option>' +
					'<option value="a">A</option>' +
					'<option value="b">B</option>' +
				'</select>', {});

				click(test.selectize.$control, function() {
					click($('[data-value="b"]', test.selectize.$dropdown), function() {
						expect(test.selectize.$input.val()).to.be.equal('b');
						expect(test.selectize.$input.text()).to.be.equal('B');
						done();
					});
				});
			});

			it('should close dropdown', function(done) {
				var test = setup_test('<select>' +
					'<option value="">Select an option...</option>' +
					'<option value="a">A</option>' +
					'<option value="b">B</option>' +
				'</select>', {});

				click(test.selectize.$control, function() {
					click($('[data-value="b"]', test.selectize.$dropdown), function() {
						expect(test.selectize.isOpen).to.be.equal(false);
						expect(test.selectize.$dropdown.is(':visible')).to.be.equal(false);
						done();
					});
				});
			});

		});

		describe('typing in input', function() {

			it('should filter results', function(done) {
				var test = setup_test('<select>' +
					'<option value="">Select an option...</option>' +
					'<option value="a">A</option>' +
					'<option value="b">B</option>' +
				'</select>', {});

				click(test.selectize.$control, function() {
					syn.type('a', test.selectize.$control_input)
					.delay(0, function() {
						expect($('[data-value="a"]', test.selectize.$dropdown).length).to.be.equal(1);
						expect($('[data-value="b"]', test.selectize.$dropdown).length).to.be.equal(0);
						done();
					});
				});
			});

			it('should hide dropdown if no results present', function(done) {
				var test = setup_test('<select>' +
					'<option value="">Select an option...</option>' +
					'<option value="a">A</option>' +
					'<option value="b">B</option>' +
				'</select>', {});

				click(test.selectize.$control, function() {
					syn.type('awaw', test.selectize.$control_input)
					.delay(0, function() {
						expect(test.selectize.isOpen).to.be.equal(false);
						expect(test.selectize.$dropdown.is(':visible')).to.be.equal(false);
						done();
					});
				});
			});

			it('should not hide dropdown if "create" option enabled and no results present', function(done) {
				var test = setup_test('<select>' +
					'<option value="">Select an option...</option>' +
					'<option value="a">A</option>' +
					'<option value="b">B</option>' +
				'</select>', {create: true});

				click(test.selectize.$control, function() {
					syn.type('awaw', test.selectize.$control_input)
					.delay(0, function() {
						expect(test.selectize.isOpen).to.be.equal(true);
						expect(test.selectize.$dropdown.is(':visible')).to.be.equal(true);
						done();
					});
				});
			});

			it('should restore dropdown visibility when backing out of a query without results (backspace)', function(done) {
				var test = setup_test('<select>' +
					'<option value="">Select an option...</option>' +
					'<option value="a">A</option>' +
					'<option value="b">B</option>' +
				'</select>', {});

				click(test.selectize.$control, function() {
					syn.type('awf', test.selectize.$control_input)
					.type('\b\b\b', test.selectize.$control_input)
					.delay(0, function() {
						expect(test.selick(label)
					.delay(0, function() {
						label.remove();
						expect(test.selectize.isFocused).to.be.equal(true);
						done();
					});
			});

			it('should give it focus to input', function(done) {
				var inputId = "labeledInput";
				var label =
					$('<label for="'+inputId+'">input</label>').appendTo('form');

				var test = setup_test('<input id="'+inputId+'" type="text" value="a,b,c,d">', {});

				syn.click(label)
					.delay(0, function() {
						label.remove();
						expect(test.selectize.isFocused).to.be.equal(true);
						done();
					});
			});

		});

		describe('clicking option', function() {

			it('should select it', function(done) {
				var test = setup_test('<select>' +
					'<option value="">Select an option...</option>' +
					'<option value="a">A</option>' +
					'<option value="b">B</option>' +
				'</select>', {});

				click(test.selectize.$control, function() {
					click($('[data-value="b"]', test.selectize.$dropdown), function() {
						expect(test.selectize.$input.val()).to.be.equal('b');
						expect(test.selectize.$input.text()).to.be.equal('B');
						done();
					});
				});
			});

			it('should close dropdown', function(done) {
				var test = setup_test('<select>' +
					'<option value="">Select an option...</option>' +
					'<option value="a">A</option>' +
					'<option value="b">B</option>' +
				'</select>', {});

				click(test.selectize.$control, function() {
					click($('[data-value="b"]', test.selectize.$dropdown), function() {
						expect(test.selectize.isOpen).to.be.equal(false);
						expect(test.selectize.$dropdown.is(':visible')).to.be.equal(false);
						done();
					});
				});
			});

		});

		describe('typing in input', function() {

			it('should filter results', function(done) {
				var test = setup_test('<select>' +
					'<option value="">Select an option...</option>' +
					'<option value="a">A</option>' +
					'<option value="b">B</option>' +
				'</select>', {});

				click(test.selectize.$control, function() {
					syn.type('a', test.selectize.$control_input)
					.delay(0, function() {
						expect($('[data-value="a"]', test.selectize.$dropdown).length).to.be.equal(1);
						expect($('[data-value="b"]', test.selectize.$dropdown).length).to.be.equal(0);
						done();
					});
				});
			});

			it('should hide dropdown if no results present', function(done) {
				var test = setup_test('<select>' +
					'<option value="">Select an option...</option>' +
					'<option value="a">A</option>' +
					'<option value="b">B</option>' +
				'</select>', {});

				click(test.selectize.$control, function() {
					syn.type('awaw', test.selectize.$control_input)
					.delay(0, function() {
						expect(test.selectize.isOpen).to.be.equal(false);
						expect(test.selectize.$dropdown.is(':visible')).to.be.equal(false);
						done();
					});
				});
			});

			it('should not hide dropdown if "create" option enabled and no results present', function(done) {
				var test = setup_test('<select>' +
					'<option value="">Select an option...</option>' +
					'<option value="a">A</option>' +
					'<option value="b">B</option>' +
				'</select>', {create: true});

				click(test.selectize.$control, function() {
					syn.type('awaw', test.selectize.$control_input)
					.delay(0, function() {
						expect(test.selectize.isOpen).to.be.equal(true);
						expect(test.selectize.$dropdown.is(':visible')).to.be.equal(true);
						done();
					});
				});
			});

			it('should restore dropdown visibility when backing out of a query without results (backspace)', function(done) {
				var test = setup_test('<select>' +
					'<option value="">Select an option...</option>' +
					'<option value="a">A</option>' +
					'<option value="b">B</option>' +
				'</select>', {});

				click(test.selectize.$control, function() {
					syn.type('awf', test.selectize.$control_input)
					.type('\b\b\b', test.selectize.$control_input)
					.delay(0, function() {
						expect(test.selectize.isOpen).to.be.equal(true);
						expect(test.selectize.$dropdown.is(':visible')).to.be.equal(true);
						done();
					});
				});
			});

			it('should move caret when [left] or [right] pressed', function(done) {
				var test = setup_test('<input type="text" value="a,b,c,d">', {create: true});

				click(test.selectize.$control, function() {
					syn.type('[left][left]whatt', test.se