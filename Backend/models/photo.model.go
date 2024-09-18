package models

type Photo struct {
	ID         int      `json:"id" gorm:"primary_key;autoIncrement"`
	Name       string   `json:"name" gorm:"type:varchar(100)"`
	OrganismID int      `json:"organism_id" gorm:"index"`
}
