export function candidateScoreBuilderForUI(data) {
  return (
    data && {
      id: data.Id,
      value: data.Value,
      candidateId: data.CandidateId,
      categoryId: data.CategoryId,
      userId: data.UserId
    }
  );
}

export function candidateBuilderForUI(data) {
  return (
    data && {
      candidateId: data.CandidateId,
      number: data.Number,
      name: data.Name,
      gender: data.Gender,
      faction: data.Faction,
      images: data.Images,
      defaultImage:
        data.Images && data.Images.length ? data.Images[0].FileName : '',
      score: data.Score && data.Score.map(candidateScoreBuilderForUI)
    }
  );
}

export function candidateByCategoryBuilderForUI(data) {
  return (
    data && {
      categoryId: data.CategoryId,
      categoryName: data.CategoryName,
      candidates: data.Candidates && data.Candidates.map(candidateBuilderForUI),
      path:
        data.CategoryName && data.CategoryName.toLowerCase().replace(/ /g, '-')
    }
  );
}
