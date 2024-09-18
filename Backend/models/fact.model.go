package models

type Fact struct {
	ID         int      `json:"id" gorm:"primary_key;autoIncrement"`
	Fact       string   `json:"fact" gorm:"type:text"`
	OrganismID int      `json:"organism_id" gorm:"index"`
}
