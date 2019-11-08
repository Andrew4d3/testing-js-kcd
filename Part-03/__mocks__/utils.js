// (2) The mock file must have the same name as the module and should define the mocked implementation
module.exports = {
   getWinner: jest.fn((p1, p2) => p1)
}