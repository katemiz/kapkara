<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Question>
 */
class QuestionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'myInput' => $this->faker->sentence(20) . '?',
            'mySelect' => $this->faker->randomElement(['1', '2', '3','4']),
            'myRadio' => $this->faker->randomElement(['1', '2', '3','4']),
            'myCheckboxSingle' => $this->faker->boolean(),
            'myCheckboxMultiple' => $this->faker->randomElements(['1', '2', '3','4'], 2),
            'myDate' => $this->faker->date(),
            'myStepLevel1' => $this->faker->randomElement(['electronics']),
            'myStepLevel2' => $this->faker->randomElement(['phones']),
            'myStepLevel3' => $this->faker->randomElement(['iphone', 'samsung']),
            'myEditorText' => $this->faker->paragraphs(3, true),
            // Assuming you have Userstamps:
            'created_by' => User::first()?->id ?? User::factory(),
            'updated_by' => User::first()?->id ?? User::factory(),
            'created_at' => $this->faker->dateTimeBetween('-1 month', 'now'),
        ];
    }
}

