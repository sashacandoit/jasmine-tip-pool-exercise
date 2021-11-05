describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a server to allServers on submitServerInfo() with an empty input', function() {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should add new row with server name to #serverTable on updateServerTable()', function() {
    submitServerInfo();
    updateServerTable();

    let tableDataList = document.querySelectorAll('#serverTable tbody td');
    
    expect(tableDataList.length).toEqual(2);
    expect(tableDataList[0].innerText).toEqual('Alice');
    expect(tableDataList[1].innerText).toEqual('$0.00');
  })

  afterEach(function() {
    // delete allServers.server1; 
    allServers = {};
    serverId = 0;
    serverTbody.innerText = '';
  });
});
