require 'test_helper'

class PerformsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get performs_new_url
    assert_response :success
  end

end
