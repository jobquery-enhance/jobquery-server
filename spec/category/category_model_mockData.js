module.exports = exports = data = {};

data.valid = {
  name:   'HR12/13',
  type:   'User',
  rank:   2
};

data.valid2 = {
  name:   'Skills',
  type:   'Tag',
  rank:   2
};

data.valid3 = {
  name:   'Location Preference',
  type:   'Tag',
  rank:   1
};

data.validTag = {
  name:   'Skills',
  type:   'Tag',
  rank:   1
};

data.validCompany = {
  name:   'Attending Hiring Day',
  type:   'Opportunity',
  rank:   1
};

data.validUser = {
  name:   'HR12/13',
  type:   'User',
  rank:   1
};

data.validUser2 = {
  name:   'HR10/11',
  type:   'User',
  rank:   2
};

data.minimum = {
  name:   'Location',
};

data.minimum2 = {
  name:   'Company Size',
};

data.missing = {};

data.missing.name = {
  type:   'User',
  rank:   2
};

data.invalid = {};

data.invalid.type = {
  name:   'HR12/13',
  type:   'somethingIllegal'
};

data.invalid.rank = {
  name:   'HR12/13',
  type:   'User',
  rank:   'notANumber'
};

data.invalid.typeCase = {
  name:   'HR12/13',
  type:   'opportunity'
};
