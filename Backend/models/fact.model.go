package models

type Fact struct {
	ID         int      `json:"id" gorm:"primary_key;autoIncrement"`
	Fact       string   `json:"name" gorm:"type:text"`
	OrganismID int      `json:"class_id" gorm:"index"`
	Organism   Organism `gorm:"foreignkey:OrganismID"`
}
