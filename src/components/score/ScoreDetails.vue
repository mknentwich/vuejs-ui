<template>
  <div>
    <h1>Score Details</h1>
    <p>Score ID: {{ id }}</p>
    <!-- Add more details here -->
  </div>
</template>

<script>
export default {
  name: 'ScoreDetails',
  props: {
    id: {
      type: String,
      required: true, // Ensure the id prop is required
    },
  },
};
</script>
